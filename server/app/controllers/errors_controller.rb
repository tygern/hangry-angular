class ErrorsController < ActionController::API
  def not_found
    render nothing: true, status: :not_found
  end

  def exception
    render nothing: true, status: :internal_server_error
  end
end