class ServiceProvider
  attr_reader :restaurants

  def initialize(env)
    places_client = GooglePlacesClient.new(env["GOOGLE_PLACES_API_KEY"])
    @restaurants = RestaurantService.new(places_client, RestaurantBuilder)
  end
end