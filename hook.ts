import * as NodeCache from 'node-cache';
import { performance, PerformanceObserver, PerformanceObserverEntryList } from 'perf_hooks';
import { createHook } from 'async_hooks';

export const enum PERFORMANCE_METRIC_IDS {
  LOAD_DASHBOARD = 'LOAD_DASHBOARD',
  LOAD_DASHBOARD_LIST = 'LOAD_DASHBOARD_LIST',
}

export const performanceMetrics = (): void => {
  /* PERFORMANCE HOOK */
  const cache = new NodeCache();
  
  const hook = createHook({
    init(id: number, type: PERFORMANCE_METRIC_IDS): void {
      if ([PERFORMANCE_METRIC_IDS.LOAD_DASHBOARD,
        PERFORMANCE_METRIC_IDS.LOAD_DASHBOARD_LIST].includes(type)) {
        performance.mark(`Cloud-Gate-metrics-${id}-${type}-Init`);
        cache.set(id, type);
      }
    },
    destroy(id: number): void {
      const type = cache.get(id);
      if (type) {
        cache.del(id);
        performance.mark(`Cloud-Gate-metrics-${id}-${type}-Destroy`);
        performance.measure(`Cloud-Gate-metrics-${id}-${type}`,
          `Cloud-Gate-metrics-${id}-${type}-Init`,
          `Cloud-Gate-metrics-${id}-${type}-Destroy`);
      }
    }
  });
  hook.enable();
  
  const obs = new PerformanceObserver((list: PerformanceObserverEntryList): void => {
    const [{name, duration}] = list.getEntries();
    
    console.log(`Duration of operation ${name} is ${duration}ms`);
    
    performance.clearMarks();
  });
  obs.observe({ entryTypes: ['measure'], buffered: true });
  /* END OF PERFORMANCE HOOK */
};
