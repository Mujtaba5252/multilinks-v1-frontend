import React,{useState,useEffect} from 'react'
import PageWrapper from '../../../../Components/PageWrapper/PageWrapper'
import { Button, Flex, Grid, Text } from '@mantine/core'
import DataGrid from '../../../../Components/DataTable/DataGrid'
import Loader from '../../../../Components/Loader/Loader'
import { axios_get } from '../../../../Utils/Axios';

function QuotationView() {
    const [quotationData, setQuotationData] = useState({});
    const [loading, setLoading] = useState(false);
    const fetchQuotation = async () => {
        setLoading(true);
        let url = '/quotation';
        await axios_get({ url: url }).then((res) => {
            setQuotationData(res.data.data);
            setLoading(false);
            console.log(res.data.data);
        });
    }
    useEffect(() => {
        fetchQuotation();
    }, []);

  return (
    <>
      <PageWrapper title="Qutations">
        <Grid>
          <Grid.Col span={12}>
          <Text align='center'>Quotation filters</Text>
          </Grid.Col>
          <Grid.Col span={12}>
            {loading ? <Loader /> :
              quotationData.length > 0 ?
                <DataGrid columns={StaffViewHeader()} data={quotationData} pagination={true} />
                : <Text align='center'>No Qutations to Display</Text>
            }
          </Grid.Col>
        </Grid>
      </PageWrapper>
    </>
  )
}

export default QuotationView