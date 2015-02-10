class RestaurantsController < ApplicationController
  def index
    render json: services.restaurants.find(params).slice(0, 5)
  end
end
