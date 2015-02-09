require "rails_helper"

describe "Restaurants API" do
  describe "GET restaurants" do

    before do
      restaurant_data = {"results" => [
        {
          "geometry" => {"location" => {"lat" => 40.026617, "lng" => -105.248102}},
          "icon" => "http://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
          "id" => "4b36ef0678c72e0dde95947cfe741f762dd82ffb",
          "name" => "Boulder Beer",
          "opening_hours" => {"open_now" => false, "weekday_text" => []},
          "photos" => [{"height" => 648, "html_attributions" => ["From a Google User"], "photo_reference" => "CnRsAAAAnktIoOn1Q6Z5AxIVKtl0sc5KlTBdKIEi3PB4gWO4cgaW77PXThbgUkm9SojLwcrverfoP-P7jE-wUgswAi1jd4eNuVoEdjlMnz6uTZJ4Q6w5Gk_jICIjvzwIQZzL2H2FTNvdBbUElCV9x_5BbDxVZxIQxqfqCrA7_L6BkJn-YxttQRoUsghd6wOEx8ZWgTTvxCI7BIQWyMY", "width" => 486}],
          "place_id" => "ChIJi3Yuw3Xua4cRlhWnWu2hujE",
          "price_level" => 1,
          "rating" => 3.9,
          "reference" => "CnRuAAAACZv3rNi5A-AOGGS5a6GHoP80fITOIrIWJ25DmVu76Pp0_gNxiJi3ttmix0dXEwsQQxpd9okz1Hc5tTQvaVBfiODfiX4nqziBLIJiteerGXyfsQ2Zx7oy5sDnEXaOQkhkuNSFTTvooqlxm_esF1w-XxIQmR-ZjwCSxMEvRR4zXRLSlRoUkTydhj0IUrSk8yU9UOWCZ3ZH00I",
          "scope" => "GOOGLE",
          "types" => ["food", "bar", "establishment"],
          "vicinity" => "2880 Wilderness Place, Boulder"
        },
        {
          "geometry" => {"location" => {"lat" => 40.034496, "lng" => -105.25414}},
          "icon" => "http://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
          "id" => "758670c4d81439d2a60a1ed0a62acd68210ec866",
          "name" => "Boulder Cork",
          "opening_hours" => {"open_now" => false, "weekday_text" => []},
          "photos" => [{"height" => 431, "html_attributions" => [], "photo_reference" => "CnRnAAAAMb8o_h-5bLbyCFZ1IOnXkawahip8dRonD0AnB4kqUzUT_8SbCq2GZ0H7KBnE-MN2gtvZxwrTuNg2707FN1LELNisd64-uQQpfxSAqZl6bmOvVKJsjRO9fPGVoUgCafz382UmvYPWXWkph5-7HkpkCBIQzp5VZ77T2lGWspXX2ina1RoU3UEmhnjr_12R9ZI8ZacuqBcM5vg", "width" => 575}],
          "place_id" => "ChIJu87M_W_ua4cRw4BsIaG1aI8",
          "price_level" => 2,
          "rating" => 3.6,
          "reference" => "CnRvAAAA0M4eZvgmef6P2EsyScStyoXu5G_psHYuFP9MS69fxRb67fwbV_D-Rb7yaLynBc5A9oURYQ_S5ggbz53js7d7VSpv2yt3jlg7VNjYFbXVq-0mOTwEroeBsiSUYzRy7HMn70dYTnhzVKtYxCEe8adFnBIQLfPZ1XnpFhWuEnPZPOLmwhoUmmcqtNM2BOJNNTL1UW23piaN2QI",
          "scope" => "GOOGLE",
          "types" => ["bar", "restaurant", "food", "establishment"],
          "vicinity" => "3295 30th Street, Boulder"}
      ]}.to_json

      stub_request(:get, /https:\/\/maps\.googleapis\.com\/maps\/api\/place\/nearbysearch\/json.*/).
        to_return(:status => 200, :body => restaurant_data, :headers => {"Content-Type" => "application/json"})
    end

    it "returns a list of all restaurants" do
      get "/restaurants"

      expect(response.status).to eq 200
      expect(JSON.parse(response.body)).to eq [{"name" => "Boulder Beer"}, {"name" => "Boulder Cork"}]
    end
  end
end