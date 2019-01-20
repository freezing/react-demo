class Api {
  static async getFullHistogram(histogramId) {
    return fetch("http://localhost:31338/histograms/" + histogramId + ".json")
    	.then(response => response.json());
  }

  static async getHistograms() {
  	return fetch("http://localhost:31338/histograms.json")
  		.then(response => {
  			return response.json()
  		});
  }
}

export default Api;