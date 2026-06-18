import AddressCard from "./AddressCard";
import EditForm from "./EditForm";
function AddressInfo({
  addr,
  addresses,
  setAddresses,
  selectedAddress,
  setSelectedAddress,
  editingId,
  setEditingId,
  editForm,
  setEditForm,
  handleSaveEdit,
  handleEdit,
  Card,
}) {
  return (
    <>
      <Card key={addr.id}>
        {editingId === addr.id ? (
          /* Edit Form */
          <EditForm
            addr={addr}
            editForm={editForm}
            setEditForm={setEditForm}
            handleSaveEdit={handleSaveEdit}
            setEditingId={setEditingId}
          />
        ) : (
          <AddressCard
            addr={addr}
            addresses={addresses}
            setAddresses={setAddresses}
            selectedAddress={selectedAddress}
            setSelectedAddress={setSelectedAddress}
            handleEdit={handleEdit}
          />
        )}
      </Card>
    </>
  );
}

export default AddressInfo;
