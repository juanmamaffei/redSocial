Rails.application.routes.draw do

  resources :images
  resources :posts
  devise_for :users, controllers: {
    sessions: 'authentication/sessions',
    registrations: 'authentication/registrations',
  }

  authenticated :user do
    root "main#dashboard"
  end

  root "main#home"

end
