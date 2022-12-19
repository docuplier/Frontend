export const validateTitles = (
  titleFromSheet: string[],
  expectedTitles: string[]
) => {
  if (expectedTitles.length === titleFromSheet.length) {
    for (var i = 0; i < expectedTitles.length; i++) {
      if (
        expectedTitles[i]?.toLowerCase() !== titleFromSheet[i]?.toLowerCase()
      ) {
        return false;
      }
      return true;
    }
    return true;
  } else {
    return false;
  }
};

export const checkMissingFields = (data: any) => {
  const d: any = [];

  data?.forEach((elem: any) => {
    if (elem.recipient_email_address && elem.recipient_full_name) {
      d.push(true);
    } else {
      d.push(false);
    }
  });
  return d.includes(false);
};
