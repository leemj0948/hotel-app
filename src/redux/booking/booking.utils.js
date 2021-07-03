export const minusAndRemoveGuests = (adult, payload) => {
  if (payload <= 0) {
    return (adult = 0);
  } else {
    return (adult = adult - 1);
  }
};
