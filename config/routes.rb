Rails.application.routes.draw do
  root 'static#index'

  resources :users, only: %i[index]
  resources :sales, only: %i[create index]
  resources :products, only: %i[create destroy index]
  resources :arrived_products, only: %i[create index]

  get '*path' => 'static#index', constraints: -> (req) { !(req.fullpath =~ /^\/rails\/.*/) }
end
