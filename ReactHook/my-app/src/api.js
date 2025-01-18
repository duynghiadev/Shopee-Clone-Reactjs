export const getUser = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          name: "Duy Nghia Dev",
          age: 21,
          address: "Da Nang",
        },
        status: 200,
      });
    }, 1500);
  });
