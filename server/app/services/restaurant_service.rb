class RestaurantService
  def initialize(restaurant_client, restaurant_builder)
    @restaurant_client = restaurant_client
    @restaurant_builder = restaurant_builder
  end

  def find(attrs)
    query_attributes = {
      latitude: attrs[:latitude],
      longitude: attrs[:longitude],
      tags: attrs[:tags]
    }

    restaurant_client.find_by_location(query_attributes).map do |restaurant_data|
      restaurant_builder.build(restaurant_data)
    end
  end

  private

  attr_reader :restaurant_client, :restaurant_builder
end