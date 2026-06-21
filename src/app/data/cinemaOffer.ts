export const cinemaOffers = [
  {
    id: "offer-001",
    title: "Weekend Discount",
    description: "Get 20% off all movie tickets every Saturday & Sunday.",
    discount: 20,
    type: "percentage",
    validDays: ["Saturday", "Sunday"],
    active: true
  },
  {
    id: "offer-002",
    title: "Student Special",
    description: "Show your student ID and get $2 off any ticket.",
    discount: 2,
    type: "fixed",
    validDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    active: true
  },
  {
    id: "offer-003",
    title: "Couple Combo",
    description: "2 tickets + 1 large popcorn + 2 drinks for $9.99.",
    price: 9.99,
    type: "bundle",
    active: true
  },
  {
    id: "offer-004",
    title: "Early Bird Offer",
    description: "All morning shows before 12 PM get 30% off.",
    discount: 30,
    type: "percentage",
    validTime: "before 12:00",
    active: true
  },
  {
    id: "offer-005",
    title: "Family Pack",
    description: "4 tickets + popcorn + drinks for $15.",
    price: 15,
    type: "bundle",
    active: false
  }
];
