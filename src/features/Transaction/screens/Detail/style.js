import {Colors} from '@Constants';

const basePadding = 18;
const styles = {
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingBottom: 16,
    marginTop: 20,
  },
  idSection: {
    backgroundColor: Colors.light,
    paddingVertical: basePadding,
    paddingHorizontal: basePadding,
    borderBottomWidth: 0.2,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
  },
  copyButton: {
    marginLeft: 6,
  },
  detailSection: {
    justifyContent: 'center',
    paddingVertical: basePadding,
    backgroundColor: Colors.light,
  },
  detailTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: basePadding,
    paddingBottom: basePadding,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  detailContainer: {
    padding: basePadding,
  },
  detailContentTitle: {
    paddingBottom: basePadding,
  },
  detailItem: {
    marginBottom: basePadding + 8,
  },
};

export default styles;
