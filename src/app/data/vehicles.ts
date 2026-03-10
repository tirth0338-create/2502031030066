export interface Vehicle {
  id: string;
  name: string;
  type: "car" | "bike";
  price: number;
  year: number;
  mileage?: string;
  condition: "New" | "Used";
  image: string;
  description: string;
  features: string[];
  specs: Record<string, string>;
}

export const vehicles: Vehicle[] = [
  // Cars
  {
    id: "car-1",
    name: "Ferrari 488 GTB",
    type: "car",
    price: 285000,
    year: 2024,
    mileage: "1,200 miles",
    condition: "Used",
    image: "https://images.unsplash.com/photo-1722591602044-17962109fa91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjBzcG9ydHMlMjBjYXJ8ZW58MXx8fHwxNzczMDYzNTU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Experience pure Italian performance with this stunning Ferrari 488 GTB. This iconic supercar features a twin-turbocharged V8 engine producing 661 horsepower.",
    features: [
      "Twin-turbo V8 Engine",
      "7-speed Dual-clutch Transmission",
      "Carbon Ceramic Brakes",
      "Premium Leather Interior",
      "Advanced Aerodynamics",
      "Launch Control"
    ],
    specs: {
      "Engine": "3.9L Twin-turbo V8",
      "Horsepower": "661 hp",
      "0-60 mph": "3.0 seconds",
      "Top Speed": "205 mph",
      "Transmission": "7-speed Dual-clutch",
      "Drive Type": "RWD"
    }
  },
  {
    id: "car-2",
    name: "Range Rover Sport",
    type: "car",
    price: 89500,
    year: 2024,
    mileage: "5,800 miles",
    condition: "Used",
    image: "https://images.unsplash.com/photo-1767749995450-7b63ab7cd4fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMFNVViUyMHZlaGljbGV8ZW58MXx8fHwxNzczMDI1NTgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Luxury meets capability in this Range Rover Sport. Perfect blend of on-road comfort and off-road prowess with cutting-edge technology.",
    features: [
      "All-Wheel Drive",
      "Adaptive Air Suspension",
      "Panoramic Sunroof",
      "Meridian Sound System",
      "Terrain Response System",
      "Heated & Cooled Seats"
    ],
    specs: {
      "Engine": "3.0L Inline-6 Turbo",
      "Horsepower": "395 hp",
      "0-60 mph": "5.7 seconds",
      "Fuel Economy": "21 mpg combined",
      "Transmission": "8-speed Automatic",
      "Seating": "5-7 passengers"
    }
  },
  {
    id: "car-3",
    name: "BMW 5 Series",
    type: "car",
    price: 62000,
    year: 2024,
    mileage: "New",
    condition: "New",
    image: "https://images.unsplash.com/photo-1716066242980-c864821b1b67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwc2VkYW4lMjBjYXJ8ZW58MXx8fHwxNzczMDcyMDkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "The perfect executive sedan combining performance, luxury, and cutting-edge technology. Brand new 2024 model with full warranty.",
    features: [
      "M Sport Package",
      "iDrive 8.5 Infotainment",
      "Harman Kardon Audio",
      "Adaptive LED Headlights",
      "Wireless Apple CarPlay",
      "Parking Assistant Plus"
    ],
    specs: {
      "Engine": "2.0L Turbo I4",
      "Horsepower": "255 hp",
      "0-60 mph": "6.1 seconds",
      "Fuel Economy": "28 mpg combined",
      "Transmission": "8-speed Automatic",
      "Drive Type": "RWD"
    }
  },
  {
    id: "car-4",
    name: "Tesla Model S",
    type: "car",
    price: 94990,
    year: 2024,
    mileage: "New",
    condition: "New",
    image: "https://images.unsplash.com/photo-1724963914478-77af9eba1c50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGVsZWN0cmljJTIwY2FyfGVufDF8fHx8MTc3MzAzMzgwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "The future of driving is here. All-electric luxury sedan with incredible performance and cutting-edge autonomous driving features.",
    features: [
      "Full Self-Driving Capability",
      "17-inch Touchscreen",
      "Premium Audio System",
      "Glass Roof",
      "Over-the-Air Updates",
      "Autopilot Included"
    ],
    specs: {
      "Motor": "Dual Motor AWD",
      "Horsepower": "670 hp",
      "0-60 mph": "3.1 seconds",
      "Range": "405 miles",
      "Top Speed": "155 mph",
      "Charging": "Supercharger Compatible"
    }
  },
  // Bikes
  {
    id: "bike-1",
    name: "Trek Domane SL 7",
    type: "bike",
    price: 5999,
    year: 2024,
    condition: "New",
    image: "https://images.unsplash.com/photo-1525996596318-edf2b6b64e60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2FkJTIwYmlrZSUyMHJhY2luZ3xlbnwxfHx8fDE3NzMxMjg3MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Premium road bike built for speed and endurance. Features advanced carbon frame technology and electronic shifting for the ultimate riding experience.",
    features: [
      "OCLV 800 Carbon Frame",
      "Shimano Ultegra Di2",
      "IsoSpeed Decoupler",
      "Bontrager Aeolus Wheels",
      "Tubeless Ready",
      "Integrated Cable Routing"
    ],
    specs: {
      "Frame": "OCLV 800 Carbon",
      "Groupset": "Shimano Ultegra Di2",
      "Wheels": "Bontrager Aeolus Pro 37",
      "Weight": "8.2 kg / 18.1 lbs",
      "Sizes": "49-62cm",
      "Max Tire": "38mm"
    }
  },
  {
    id: "bike-2",
    name: "Specialized Stumpjumper",
    type: "bike",
    price: 4200,
    year: 2024,
    condition: "New",
    image: "https://images.unsplash.com/photo-1665134781553-28862521c2ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGJpa2UlMjBjeWNsaW5nfGVufDF8fHx8MTc3MzEyODcxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Trail-ready mountain bike engineered for technical climbs and aggressive descents. The perfect all-mountain companion.",
    features: [
      "Full Suspension",
      "SRAM GX Eagle 12-speed",
      "RockShox Suspension",
      "Dropper Post",
      "29-inch Wheels",
      "Internal Cable Routing"
    ],
    specs: {
      "Frame": "M5 Alloy",
      "Fork": "RockShox Pike Select 150mm",
      "Rear Travel": "150mm",
      "Groupset": "SRAM GX Eagle",
      "Brakes": "SRAM Code R",
      "Weight": "13.8 kg / 30.4 lbs"
    }
  },
  {
    id: "bike-3",
    name: "Rad Power RadRover 6",
    type: "bike",
    price: 1999,
    year: 2024,
    condition: "New",
    image: "https://images.unsplash.com/photo-1753092604434-8c0e6c3b50f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMGJpY3ljbGUlMjBlYmlrZXxlbnwxfHx8fDE3NzMxMjg3MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Electric fat bike designed for adventure. Go farther and faster with pedal assist technology and all-terrain capability.",
    features: [
      "750W Geared Hub Motor",
      "48V 14Ah Battery",
      "Fat Tire Design",
      "LCD Display",
      "Integrated Lights",
      "Up to 45 Miles Range"
    ],
    specs: {
      "Motor": "750W Geared Hub",
      "Battery": "48V 14Ah (672Wh)",
      "Range": "25-45 miles",
      "Top Speed": "20 mph",
      "Tires": "26\" x 4\"",
      "Payload": "275 lbs"
    }
  },
  {
    id: "bike-4",
    name: "GT Performer BMX",
    type: "bike",
    price: 549,
    year: 2024,
    condition: "New",
    image: "https://images.unsplash.com/photo-1693598524568-7c00ff9a85fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibXglMjBiaWtlJTIwdHJpY2tzfGVufDF8fHx8MTc3MzEyODcxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Classic BMX bike built for tricks, jumps, and street riding. Durable construction meets freestyle performance.",
    features: [
      "Hi-Ten Steel Frame",
      "20-inch Wheels",
      "Freestyle Pegs",
      "Alloy Rims",
      "U-Brake System",
      "Platform Pedals"
    ],
    specs: {
      "Frame": "Hi-Ten Steel",
      "Fork": "Hi-Ten Steel",
      "Wheels": "20\" Alloy",
      "Brakes": "Alloy U-Brake",
      "Bars": "2-piece BMX",
      "Weight": "11.8 kg / 26 lbs"
    }
  },
  {
    id: "bike-5",
    name: "Electra Cruiser 7D",
    type: "bike",
    price: 629,
    year: 2024,
    condition: "New",
    image: "https://images.unsplash.com/photo-1771080947028-5676419a4a4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnVpc2VyJTIwYmljeWNsZSUyMHZpbnRhZ2V8ZW58MXx8fHwxNzczMTI4NzE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Comfortable cruiser perfect for beach rides and casual commuting. Classic style with modern components.",
    features: [
      "7-Speed Shimano Drivetrain",
      "Comfort Saddle",
      "Swept-back Handlebars",
      "Fenders Included",
      "Rear Rack Compatible",
      "Coaster Brake"
    ],
    specs: {
      "Frame": "Aluminum",
      "Gears": "7-speed Shimano",
      "Wheels": "26\" Alloy",
      "Brakes": "Coaster & Hand",
      "Saddle": "Electra Comfort",
      "Weight": "15.4 kg / 34 lbs"
    }
  }
];
