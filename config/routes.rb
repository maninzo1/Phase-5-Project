Rails.application.routes.draw do
  # resources :medication_notes
  # resources :takens
  resources :medications, only:[:index, :show, :update, :destroy] 
  resources :user_medications, only:[:index, :create, :show, :update, :destroy]
  resources :users, only:[:index]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # config/routes.rb
#   get "/hello", to: "application#hello_world"

#   get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
# end

end


