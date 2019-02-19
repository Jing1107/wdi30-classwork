class BooksController < ApplicationController
  def form
    render :form
  end

  def info
    #raise "hell"
    @title = params[:title]
    url = ""
    info = HTTParty.get url
    @cover = info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
    render :info
  end
end
