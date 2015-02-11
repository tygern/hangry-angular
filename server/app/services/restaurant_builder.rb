class RestaurantBuilder
  def self.build(restaurant_data)
    Restaurant.new(restaurant_data)
  end
end