export function GenerateMsgUUID() {
  let d = new Date().getTime();

  /* eslint-disable no-bitwise */
  /* eslint-disable no-mixed-operators */
  return 'xxxx-4xxx-yxxx-xxxx'.replace(/[xy]/g, (c) => {
    const r = (d + Math.random() * 16) % 16 | 0;

    d = Math.floor(d / 16);

    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  /* eslint-enable no-bitwise */
  /* eslint-disable no-mixed-operators */
}
