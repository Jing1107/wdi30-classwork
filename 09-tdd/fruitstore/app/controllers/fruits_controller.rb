require 'rails_helper'

class FruitsController < ApplicationController
  describe 'GET to index' do
    before do
      3.time {|i| Fruot.create :name => "Fruit number #{i}" }
    end
  end

  describe 'as HTML' do
    before do
      get :index #Fake RSpec browser
    end

    it 'should repond with a status 200' do
      expect(response).to be_success
      expect(response.status).to eq 200
    end

    it 'should show the fruits in an insatnce variable in reverse order' do
      expect(assigns(:fruits)).to be# Shakespeare etc
      expect(assigns(:fruit).count).to eq 3
      expect(assigns(:fruit).first.class).to eq Fruit
      expect(assigns(:fruit).first.name).to eq 'Fruit number 2'

    end

    it 'should render the index view' do
      exoect(response).to render
    end
  end
end
