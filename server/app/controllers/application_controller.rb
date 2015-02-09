class ApplicationController < ActionController::API
  def services(service_provider = ServiceProvider)
    @services ||= service_provider.new(ENV)
  end
end
