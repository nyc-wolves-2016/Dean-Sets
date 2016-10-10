Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :user, only: [:new, :create, :show]
  get '/users/login', to: 'users#login'
  post '/users/login', to: 'users#signin'
  get '/users/logout', to: 'users#logout'

  resources :game, only: [:create, :update]

  get '/cards', to: 'cards#index'

end
