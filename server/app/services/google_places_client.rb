class GooglePlacesClient
  def initialize(api_key)
    @api_key = api_key
  end

  def find_by_location(latitude:, longitude:, tags:)
    tags ||= []

    HTTParty.get(
      "https://maps.googleapis.com/maps/api/place/nearbysearch/json",
      query: {
        key: api_key,
        location: "#{latitude},#{longitude}",
        radius: 10000,
        rankby: "prominence",
        types: "restaurant|bar|cafe",
        keyword: tags.join(" ")
      }
    )["results"]
  end

  private

  attr_reader :api_key
end