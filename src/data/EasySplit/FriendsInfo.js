export const friendsInfo = [
  {
    main: {
      displayName: "Sandeep",
      userId: "Sa194920",
      fullName: "Sandeep Amarnath",
      oweAmount: 50,
    },
    details: [
      {
        date: "04 Dec, 2010",
        transactionAmount: "30",
        paidBy: "You",
        type: "custom",
        category: "entertainment",
        owe: "20",
        details: "Watched starwars movie",
      },
      {
        date: "12 Dec, 2020",
        transactionAmount: "40",
        paidBy: "You",
        type: "nosplit",
        category: "buffet",
        owe: "10",
        details: "Saravana bhavan",
      },
      {
        date: "04 Nov, 1992",
        transactionAmount: "60",
        paidBy: "Sandeep",
        type: "equal",
        category: "fitness",
        owe: "200",
        details: "Whey protein",
      },
    ],
  },
  {
    main: {
      displayName: "Karthik",
      userId: "ky123465",
      fullName: "Murali Karthik",
      oweAmount: -500,
    },
    details: [
      {
        date: "18 Aug, 2019",
        transactionAmount: "30",
        paidBy: "You",
        type: "custom",
        category: "entertainment",
        owe: "20",
        details: "Watched starwars movie",
      },
      {
        date: "04 Sep, 2020",
        transactionAmount: "40",
        paidBy: "You",
        type: "nosplit",
        category: "buffet",
        owe: "10",
        details: "Saravana bhavan",
      },
      {
        date: "01 Jun, 1998",
        transactionAmount: "60",
        paidBy: "Sandeep",
        type: "equal",
        category: "fitness",
        owe: "200",
        details: "Whey protein",
      },
    ],
  },
];

// add data to firestore

// const fr = friendsInfo[0];
//     db.collection("friends")
//       .doc("Sa194920")
//       .set({
//         ...fr,
//       })
//       .then(function () {
//         console.log("Document successfully written!");
//       })
//       .catch(function (error) {
//         console.error("Error writing document: ", error);
//       });

// get the data from firestore

//   const firebaseFriends = [];
//   db.collection("friends")
//     .get()
//     .then((snapshot) => {
//       snapshot.forEach((friend) => {
//         firebaseFriends.push(friend.data());
//       });
//       dispatch(setFriends(firebaseFriends));
//       console.log("firebaseFriends");
//       console.log(firebaseFriends);
//     })
//     .catch((error) => dispatch(setFriendsFailed()));

// update the data in friebase. Use this dot notation not to lose other fields

// db.collection("friends").doc("Sa194920").update({
//   "main.oweAmount": 180,
// });
