export const removeUnderScore = (str) => {
  var i,
    frags = String(str)?.split("_");
  for (i = 0; i < frags.length; i++) {
    frags[i] = frags[i]?.charAt(0)?.toUpperCase() + frags[i]?.slice(1);
  }
  return frags?.join(" ");
};

export const formatInput = (str) =>
  (str && str?.replace(/ \\ r \\ n/g, `\n`)?.replace(/\\r\\n/g, `\n`))
    ?.replace(/\\n/g, `\n`)
    ?.replace(/\\/g, "") || "";
