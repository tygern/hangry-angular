require "rails_helper"

describe RestaurantBuilder do
  let(:restaurant_data) { {
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
  } }

  it "hydrates a Restaurant from a hash" do
    restaurant = RestaurantBuilder.build(restaurant_data)

    expect(restaurant.name).to eq "Boulder Beer"
  end
end