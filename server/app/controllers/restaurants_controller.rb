class RestaurantsController < ApplicationController
  def index
    render json: services.restaurants.find(query_params).slice(0, 5)
  end

  private

  def query_params
    params.permit(:latitude, :longitude, tags: [])
  end
end
