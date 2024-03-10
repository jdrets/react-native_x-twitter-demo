export interface FeedPost {
  id: number;
  user: {
    avatar: string;
    username: string;
    nickname: string;
  };
  data: {
    text: string;
    date: string;
    image?: string;
    meta: {
      likes: number;
      comments: number;
      shares: number;
    };
  };
}

export const feedPosts = [
  {
    id: 1,
    user: {
      avatar:
        "https://media.licdn.com/dms/image/D4D03AQFJTgFvK9QpVQ/profile-displayphoto-shrink_200_200/0/1700684884290?e=1715817600&v=beta&t=EPTqe-IkHaNbXLqvgvPhPio9H2nMcvYZC72siGSe6d0",
      username: "johndoe",
      nickname: "John Doe",
    },
    data: {
      text: "Hello World",
      date: "2021-01-01T00:00:00Z",
      meta: {
        likes: 10,
        comments: 5,
        shares: 100,
      },
    },
  },
  {
    id: 2,
    user: {
      avatar:
        "https://media.licdn.com/dms/image/D4D03AQFJTgFvK9QpVQ/profile-displayphoto-shrink_200_200/0/1700684884290?e=1715817600&v=beta&t=EPTqe-IkHaNbXLqvgvPhPio9H2nMcvYZC72siGSe6d0",
      username: "janedoe",
      nickname: "Jane Doe",
    },
    data: {
      text: "Good morning!",
      image:
        "https://cdn.akamai.steamstatic.com/half-life.com/images/alyx/halflife_alyx_11a.jpg",
      date: "2021-01-02T08:00:00Z",
      meta: {
        likes: 15,
        comments: 8,
        shares: 50,
      },
    },
  },
  {
    id: 3,
    user: {
      avatar:
        "https://media.licdn.com/dms/image/D4D03AQFJTgFvK9QpVQ/profile-displayphoto-shrink_200_200/0/1700684884290?e=1715817600&v=beta&t=EPTqe-IkHaNbXLqvgvPhPio9H2nMcvYZC72siGSe6d0",
      username: "alice",
      nickname: "Alice",
    },
    data: {
      text: "What a beautiful day!",
      date: "2021-01-03T12:00:00Z",
      meta: {
        likes: 20,
        comments: 3,
        shares: 70,
      },
    },
  },
  {
    id: 4,
    user: {
      avatar:
        "https://media.licdn.com/dms/image/D4D03AQFJTgFvK9QpVQ/profile-displayphoto-shrink_200_200/0/1700684884290?e=1715817600&v=beta&t=EPTqe-IkHaNbXLqvgvPhPio9H2nMcvYZC72siGSe6d0",
      username: "bob",
      nickname: "Bob",
    },
    data: {
      text: "Feeling excited!",
      date: "2021-01-04T16:00:00Z",
      meta: {
        likes: 25,
        comments: 10,
        shares: 80,
      },
    },
  },
  {
    id: 5,
    user: {
      avatar:
        "https://media.licdn.com/dms/image/D4D03AQFJTgFvK9QpVQ/profile-displayphoto-shrink_200_200/0/1700684884290?e=1715817600&v=beta&t=EPTqe-IkHaNbXLqvgvPhPio9H2nMcvYZC72siGSe6d0",
      username: "charlie",
      nickname: "Charlie",
    },
    data: {
      text: "Just chilling.",
      date: "2021-01-05T20:00:00Z",
      meta: {
        likes: 30,
        comments: 15,
        shares: 90,
      },
    },
  },
  {
    id: 6,
    user: {
      avatar:
        "https://media.licdn.com/dms/image/D4D03AQFJTgFvK9QpVQ/profile-displayphoto-shrink_200_200/0/1700684884290?e=1715817600&v=beta&t=EPTqe-IkHaNbXLqvgvPhPio9H2nMcvYZC72siGSe6d0",
      username: "charlie",
      nickname: "Charlie",
    },
    data: {
      text: "Just chilling.",
      date: "2021-01-05T20:00:00Z",
      meta: {
        likes: 30,
        comments: 15,
        shares: 90,
      },
    },
  },
  {
    id: 7,
    user: {
      avatar:
        "https://media.licdn.com/dms/image/D4D03AQFJTgFvK9QpVQ/profile-displayphoto-shrink_200_200/0/1700684884290?e=1715817600&v=beta&t=EPTqe-IkHaNbXLqvgvPhPio9H2nMcvYZC72siGSe6d0",
      username: "charlie",
      nickname: "Charlie",
    },
    data: {
      text: "Just chilling.",
      date: "2021-01-05T20:00:00Z",
      meta: {
        likes: 30,
        comments: 15,
        shares: 90,
      },
    },
  },
  {
    id: 8,
    user: {
      avatar:
        "https://media.licdn.com/dms/image/D4D03AQFJTgFvK9QpVQ/profile-displayphoto-shrink_200_200/0/1700684884290?e=1715817600&v=beta&t=EPTqe-IkHaNbXLqvgvPhPio9H2nMcvYZC72siGSe6d0",
      username: "charlie",
      nickname: "Charlie",
    },
    data: {
      text: "Just chilling.",
      date: "2021-01-05T20:00:00Z",
      meta: {
        likes: 30,
        comments: 15,
        shares: 90,
      },
    },
  },
];
