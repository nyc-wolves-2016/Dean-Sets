Rails.application.routes.draw do
  root to: "static#index"

  get '/users/login', to: "users#login"
  post '/users/login', to: 'users#signin'
  get '/users/logout', to: 'users#logout'

  resources :users, only: [:new, :create, :show]

  resources :games, only: [:create, :update]

  get '/cards', to: 'cards#index'
end
