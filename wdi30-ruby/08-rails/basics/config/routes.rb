Rails.application.routes.draw do
  root :to  => 'pages#hello' #get '/' => 'pages#hello' homepage
  get '/hello' => 'pages#hello'
  get '/about' => 'pages#about'
  get '/faq' => 'pages#faq'
  get '/funny' => 'pages#funny'

  get '/auto/:color' => 'auto#color'
  get '/auto/:hp/:torque' => 'auto#engine'

  get 'calc/:x/:y/:operator' => 'calculator#calculate'
end
