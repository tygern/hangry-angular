require "rails_helper"

describe RestaurantService do
  let(:restaurant_data) { [{a: "restaurant"}, {a: "cafe"}] }

  let(:restaurant) { double(:restaurant) }
  let(:cafe) { double(:cafe) }

  let(:restaurant_client) { instance_double(GooglePlacesClient, find_by_location: restaurant_data) }
  let(:restaurant_builder) { class_double(RestaurantBuilder) }

  subject { RestaurantService.new(restaurant_client, restaurant_builder) }

  describe "#find" do
    it "finds the restaurants by location" do
      allow(restaurant_builder).to receive(:build).and_return(restaurant, cafe)

      result = subject.find({
                              latitude: 123,
                              longitude: 321,
                              tags: ["pickles", "mustard"]
                            })

      expect(result).to match_array([restaurant, cafe])

      expect(restaurant_client).to have_received(:find_by_location).with(
                                     latitude: 123,
                                     longitude: 321,
                                     tags: ["pickles", "mustard"]
                                   )

      expect(restaurant_builder).to have_received(:build).with({a: "restaurant"})
      expect(restaurant_builder).to have_received(:build).with({a: "cafe"})
    end
  end
end