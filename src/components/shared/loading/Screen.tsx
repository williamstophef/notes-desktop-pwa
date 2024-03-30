import { useEffect, useState } from "react";

/** Vendors */
import { Flex, Layout, Spin, Typography } from "antd";

/** Hooks */
import useDelay from "@hooks/useDelay";

function LoadingScreen({ children }) {
  const [loading, setLoading] = useState(true);
  const delay = useDelay();

  useEffect(() => {
    delay(() => setLoading(false), 2000);
  }, []);

  if (!loading) {
    return children;
  }

  return (
    <Layout>
      <Flex align="center" className="h-100 w-100" justify="center" vertical>
        <img
          src="/logos/notes-logo-512-2.png"
          style={{ height: "20vh", width: "20vh" }}
        />
        <Typography.Title level={2}>Note Taking App</Typography.Title>
        <Spin size="large" />
      </Flex>
    </Layout>
  );
}

export default LoadingScreen;
