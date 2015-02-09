class RestaurantService
  def initialize(restaurant_client)
    @restaurant_client = restaurant_client
  end

  def find(attrs)
    restaurant_client.find_by_location(
                       latitude: attrs[:latitude],
                       longitude: attrs[:longitude]
    ).map do |restaurant_data|
      Restaurant.new(restaurant_data)
    end
  end

  private

  attr_reader :restaurant_client
end