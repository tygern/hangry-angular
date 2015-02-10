require "rails_helper"

describe RestaurantsController do
  describe "GET index" do
    it "gets a list of restaurants from the restaurants controller" do
      allow(services.restaurants).to receive(:find).and_return(["restaurant"])

      get :index, latitude: 123, longitude: 321, tags: ["pickles", "mustard"]

      expect(JSON.parse(response.body)).to eq ["restaurant"]
      expect(services.restaurants).to have_received(:find).with({
                                                                  "latitude" => "123", "longitude" => "321", "tags" => ["pickles", "mustard"], "controller"=>"restaurants", "action"=>"index"
                                                                })
    end
  end
end