import styles from "./styles.module.css";

const FullWidthScrollingBanner = () => {
  const bannerModules = [
    {
      title: "Photo",
      link: "/",
    },
  ];

  //Iterate over array of links to display banner modules could be projects or sections not sure yet how to divide items

  const BannerModule = () => {
    return (
      <>
        <span className={styles.banner_module}>banner module</span>
      </>
    );
  };

  return (
    <section className={styles.scroll_banner_wrapper}>
      <h1>FullWidthScrollingBanner</h1>
    </section>
  );
};

export default FullWidthScrollingBanner;
