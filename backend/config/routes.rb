Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users
  post '/login', to: 'users#login'
  get '/profile', to: 'users#profile'
  get '/auto_login', to: 'users#auto_login'

  get '/visitors', to: 'visitors#index'

  # resources :logs
  get '/logs', to: 'logs#index'
  post '/log/save', to: 'logs#save'
  get '/log/:id/edit', to: 'logs#edit'
  patch '/log/:id', to: 'logs#update'
  delete '/logs/', to: 'logs#delete'
  
end
