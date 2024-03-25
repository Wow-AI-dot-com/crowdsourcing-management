// eslint-disable-next-line no-extend-native
String.prototype.toUpperCaseFirst = function (this: string) {
  return this.length > 0 ? this.charAt(0).toUpperCase() + this.slice(1) : this;
}

export {};
