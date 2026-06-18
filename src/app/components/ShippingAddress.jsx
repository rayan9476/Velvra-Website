import AddNewAddress from "./AddNewAddress";
import AddressInfo from "./AddressInfo";

function ShippingAddress({
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
  showAddForm,
  setShowAddForm,
  newAddress,
  setNewAddress,
  handleAddAddress,
  SectionLabel,
  Card,
}) {
  return (
    <div className="mb-6 md:mb-8">
      <SectionLabel text="Shipping Address" />

      <div className="flex flex-col gap-3 md:gap-4">
        {addresses.map((addr) => (
          <AddressInfo
            addr={addr}
            addresses={addresses}
            setAddresses={setAddresses}
            selectedAddress={selectedAddress}
            setSelectedAddress={setSelectedAddress}
            editingId={editingId}
            setEditingId={setEditingId}
            editForm={editForm}
            setEditForm={setEditForm}
            handleSaveEdit={handleSaveEdit}
            handleEdit={handleEdit}
            Card={Card}
          />
        ))}

        {/* Add  New Address */}
        <AddNewAddress
          showAddForm={showAddForm}
          setShowAddForm={setShowAddForm}
          newAddress={newAddress}
          setNewAddress={setNewAddress}
          handleAddAddress={handleAddAddress}
          Card={Card}
        />
      </div>
    </div>
  );
}

export default ShippingAddress;
