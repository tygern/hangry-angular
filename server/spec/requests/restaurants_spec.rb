require "rails_helper"

describe "Restaurants API" do
  describe "GET restaurants" do
    it "returns a list of all restaurants" do
      get "/restaurants"

      expect(response.status).to eq 200
      expect(JSON.parse(response.body)).to eq []
    end
  end
end