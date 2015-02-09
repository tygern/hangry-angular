class GooglePlacesClient
  def initialize(api_key)
    @api_key = api_key
  end

  def find_by_location(latitude:, longitude:)
    HTTParty.get(
      "https://maps.googleapis.com/maps/api/place/nearbysearch/json",
      query: {
        key: api_key,
        location: "#{latitude},#{longitude}",
        radius: 1000,
        rankby: "prominence",
        types: "restaurant|food|bar|cafe"
      }
    )["results"]
  end

  private

  attr_reader :api_key
end