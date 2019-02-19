json.extract! movie, :id, :title, :streaming, :relased, :rating, :plot, :created_at, :updated_at
json.url movie_url(movie, format: :json)
