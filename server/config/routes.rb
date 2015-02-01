Hangry::Application.routes.draw do
  get "/404" => "errors#not_found"
  get "/500" => "errors#exception"

  resources :restaurants, only: :index
end
