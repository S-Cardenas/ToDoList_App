Rails.application.routes.draw do

	root to: "static_pages#root"
  # EVERYTHING WILL BE UNDER API NAMESPACE!!! MWAHAHA!!! (except for that root thing)
  namespace :api, defaults: {format: :json} do
    resources :todos, only: [:index, :show, :create, :destroy, :update]
  end
end
