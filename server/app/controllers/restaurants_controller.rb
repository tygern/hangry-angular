class RestaurantsController < ApplicationController
  def index
    render json: services.restaurants.find(query_params)
  end

  private

  def query_params
    params.permit(:latitude, :longitude)
  end
end
