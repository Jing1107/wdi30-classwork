require 'rails_helper'

RSpec.describe Fruit, type: :model do

  it { should belong _to(:shelf)}

  describe "an apple" do
    before do
      @apple = Fruit.new
    end

    it "should not be squishy" do
      expect(@apple.squishy?).to be false
    end

    it "Should remember the class using Single Table Inheritance (STI)" do
      apple = Fruit.find @apple.id
      expect(apple).to_not be_nil
      expect(apple.class).to eq Apple
      expect(apple).to eq @apple
      expect(apple.is_a?(Fruits)).to be true
      expect(apple.class.ancestors).to unclude(Fruit)
    end
  end

  describe "a pear" do
    before do
      @pear = Fruit.new
    end

    it "should be kind of squishy" do
      expect(@pear.squishy?).to be true
    end

    it "Should remember the class using Single Table Inheritance (STI)" do
      pear = Fruit.find @pear.id
      expect(pear).to_not be_nil
      expect(pear.class).to eq Pear
      expect(pear).to eq @pear
      expect(pear.is_a?(Fruits)).to be true
      expect(pear.class.ancestors).to unclude(Fruit)
    end
  end
end
