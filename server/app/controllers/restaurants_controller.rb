class RestaurantsController < ActionController::API
  def index
    render json: ['one', 'two']
  end
end
