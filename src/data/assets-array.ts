export interface Asset {
  id: number
  image_name: string
  image_path: string
  image_dimensions: {
    width: number
    height: number
  }
  favourited: boolean
  file_type: string
  file_size: number
  created_at: string
  updated_at: string
  tags: string[]
  description: string
}

export const assets: Asset[] = [
  {
    id: 1,
    image_name: "",
    image_path: "/images/library/Brum.jpg",
    image_dimensions: { width: 2731, height: 4096 },
    favourited: true,
    file_type: "jpg",
    file_size: 6377517,
    created_at: "2025-09-14T10:22:11Z",
    updated_at: "2025-11-03T15:48:02Z",
    tags: ["abstract","background","geometry","shapes","colourful","modern","design","creative"],
    description: "A bold abstract background featuring layered geometric shapes."
  },
  {
    id: 2,
    image_name: "London Office 2025",
    image_path: "/images/library/london-office-2025.jpg",
    image_dimensions: { width: 4096, height: 2731 },
    favourited: false,
    file_type: "jpg",
    file_size: 9165051,
    created_at: "2025-08-05T09:14:37Z",
    updated_at: "2025-08-05T09:14:37Z",
    tags: [],
    description: "Wide format image designed for use in a website hero section."
  },
  {
    id: 3,
    image_name: "Lone Manchester Tower",
    image_path: "/images/library/manchester-tower.jpg",
    image_dimensions: { width: 2304, height: 4096 },
    favourited: false,
    file_type: "jpg",
    file_size: 3992065,
    created_at: "2025-07-19T12:55:09Z",
    updated_at: "2025-09-01T09:17:31Z",
    tags: ["photography","portrait","editorial","studio","lighting","people","fashion","high-resolution","professional","print"],
    description: "High resolution editorial portrait photography."
  },
  {
    id: 4,
    image_name: "",
    image_path: "/images/library/Misty-Manch-1.jpg",
    image_dimensions: { width: 1925, height: 2889 },
    favourited: true,
    file_type: "png",
    file_size: 1127893,
    created_at: "2025-10-07T16:41:26Z",
    updated_at: "2025-10-21T11:03:54Z",
    tags: ["marketing","banner","product"],
    description: "Promotional banner artwork used for product marketing campaigns."
  },
  {
    id: 5,
    image_name: "",
    image_path: "/images/library/Misty-Manch-2.png",
    image_dimensions: { width: 4096, height: 2731 },
    favourited: false,
    file_type: "png",
    file_size: 9995962,
    created_at: "2025-06-11T14:08:59Z",
    updated_at: "2025-12-05T17:22:10Z",
    tags: [],
    description: "Detailed illustrated artwork inspired by natural forms."
  },
  {
    id: 6,
    image_name: "",
    image_path: "/images/library/Salford-2023.jpg",
    image_dimensions: { width: 4032, height: 3024 },
    favourited: true,
    file_type: "jpg",
    file_size: 1096216,
    created_at: "2025-11-18T11:06:52Z",
    updated_at: "2025-11-22T09:32:18Z",
    tags: ["ui","interface","dashboard","app","software"],
    description: "Screenshot capturing a modern lanscape."
  }
]
