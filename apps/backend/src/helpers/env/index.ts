const ensure = (varName: string): string => {
  const VAR = process.env[varName];

  if (VAR === undefined) {
    throw new Error(`${varName} not found`);
  }

  return VAR;
};

export default ensure;
