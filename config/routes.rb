Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do 
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :update, :show, :index] do 
      resources :comments, only: [:index]
      resources :follows, only: [:create, :destroy]
    end
    resources :photos, only: [:create, :update, :show, :index] do 
      resources :comments, only: [:index]
    end
    resources :comments, only: [:create, :show]
    resources :follows, only: [:index]
  end
end
