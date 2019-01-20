class Api {
  static async getFullHistogram(histogramId) {
    return fetch("http://localhost:31338/histograms/" + histogramId + ".json")
    	.then(response => response.json());
  }

  static async getHistograms() {
  	return fetch("http://localhost:31338/histograms.json")
  		.then(response => response.json());
  }

  static async getBenchmarks() {
    return fetch("http://localhost:31338/throughput/benchmarks.json")
      .then(response => response.json());
  }

  static async getFullBenchmark(benchmarkId) {
    return fetch("http://localhost:31338/throughput/" + benchmarkId + ".json")
      .then(response => response.json());
  }
}

export default Api;