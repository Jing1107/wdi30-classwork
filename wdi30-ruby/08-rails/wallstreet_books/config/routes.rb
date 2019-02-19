Rails.application.routes.draw do
  # For details on the DSL available within this file, see
  #http://guides.rubyonrails.org/routing.html
  root :to  => 'pages#home'

  get '/stocks' => 'stock#form'
  get '/stocks/info' => 'stock#info'

  get 'books' => 'books#form'
  get 'books/info' => 'books#info'

end
